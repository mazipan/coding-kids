import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react'
import * as Blockly from 'blockly'
import { javascriptGenerator } from 'blockly/javascript'
import * as EnLocale from 'blockly/msg/en'
import * as IdLocale from 'blockly/msg/id'
import { buildToolbox } from '../blockly/toolboxes'
import { registerCustomBlocks } from '../blockly/customBlocks'
import { useLanguage } from '../i18n/LanguageProvider'

registerCustomBlocks()

const CUSTOM_MSG: Record<string, Record<'en' | 'id', string>> = {
  MOVE_RIGHT:   { en: '➡️ Move Right',  id: '➡️ Gerak Kanan' },
  MOVE_LEFT:    { en: '⬅️ Move Left',   id: '⬅️ Gerak Kiri' },
  MOVE_UP:      { en: '⬆️ Move Up',     id: '⬆️ Gerak Atas' },
  MOVE_DOWN:    { en: '⬇️ Move Down',   id: '⬇️ Gerak Bawah' },
  COLLECT_ITEM: { en: '⭐ Collect',     id: '⭐ Ambil' },
}

function applyLocale(language: string) {
  const locale = language === 'id' ? IdLocale : EnLocale
  Blockly.setLocale(locale as unknown as Record<string, string>)
  const lang = language === 'id' ? 'id' : 'en'
  for (const [key, vals] of Object.entries(CUSTOM_MSG)) {
    ;(Blockly.Msg as Record<string, string>)[key] = vals[lang]
  }
}

const KID_THEME = Blockly.Theme.defineTheme('kidTheme', {
  name: 'kidTheme',
  base: Blockly.Themes.Zelos,
  componentStyles: {
    workspaceBackgroundColour: '#1E1B4B',
    toolboxBackgroundColour: '#130D2E',
    toolboxForegroundColour: '#E2D9F3',
    flyoutBackgroundColour: '#1C1440',
    flyoutForegroundColour: '#C4B5FD',
    flyoutOpacity: 0.98,
    scrollbarColour: '#4C1D95',
    insertionMarkerColour: '#A78BFA',
    insertionMarkerOpacity: 0.5,
    scrollbarOpacity: 0.5,
    cursorColour: '#A78BFA',
  },
})

export interface BlocklyWorkspaceHandle {
  resize: () => void
  loadState: (state: object) => void
}

interface BlocklyWorkspaceProps {
  categories: string[]
  onCodeChange: (code: string, blockCount: number, usedBlockTypes: string[]) => void
}

export const BlocklyWorkspace = forwardRef<BlocklyWorkspaceHandle, BlocklyWorkspaceProps>(
  function BlocklyWorkspace({ categories, onCodeChange }, ref) {
    const { t, language } = useLanguage()
    const containerRef = useRef<HTMLDivElement>(null)
    const workspaceRef = useRef<Blockly.WorkspaceSvg | null>(null)
    const savedStateRef = useRef<object | null>(null)
    const onCodeChangeRef = useRef(onCodeChange)
    const [blockCount, setBlockCount] = useState(0)
    const [showCode, setShowCode] = useState(false)
    const [generatedCode, setGeneratedCode] = useState('')

    // Keep callback ref current without triggering workspace recreation
    useEffect(() => {
      onCodeChangeRef.current = onCodeChange
    }, [onCodeChange])

    useImperativeHandle(ref, () => ({
      resize() {
        if (workspaceRef.current) {
          Blockly.svgResize(workspaceRef.current)
        }
      },
      loadState(state: object) {
        const ws = workspaceRef.current
        if (!ws) return
        ws.clear()
        try {
          Blockly.serialization.workspaces.load(state, ws)
        } catch {
          // ignore incompatible state
        }
      },
    }))

    useEffect(() => {
      if (!containerRef.current) return

      applyLocale(language)

      const toolbox = buildToolbox(categories, language)
      const isMobile = window.innerWidth < 1024

      const workspace = Blockly.inject(containerRef.current, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        toolbox: toolbox as any,
        theme: KID_THEME,
        renderer: 'zelos',
        horizontalLayout: isMobile,
        toolboxPosition: isMobile ? 'top' : 'start',
        grid: {
          spacing: 24,
          colour: 'rgba(255,255,255,0.05)',
          snap: true,
        },
        trashcan: true,
        scrollbars: true,
        zoom: {
          controls: true,
          wheel: true,
          startScale: isMobile ? 0.75 : 1.0,
          maxScale: 2,
          minScale: isMobile ? 0.3 : 0.5,
          scaleSpeed: 1.2,
        },
        move: {
          scrollbars: true,
          drag: true,
          wheel: false,
        },
      })

      workspaceRef.current = workspace

      // Restore blocks saved from previous workspace (e.g. after language switch)
      if (savedStateRef.current) {
        try {
          Blockly.serialization.workspaces.load(savedStateRef.current, workspace)
        } catch {
          // Ignore if saved state is incompatible
        }
        savedStateRef.current = null
      }

      const updateCode = () => {
        try {
          const code = javascriptGenerator.workspaceToCode(workspace)
          const allBlocks = workspace.getAllBlocks(false)
          const count = allBlocks.length
          const usedBlockTypes = allBlocks.map(b => b.type)
          setBlockCount(count)
          setGeneratedCode(code)
          onCodeChangeRef.current(code, count, usedBlockTypes)
        } catch {
          // Ignore generation errors
        }
      }

      workspace.addChangeListener(updateCode)

      return () => {
        // Save blocks before disposing so they survive a language switch
        try {
          savedStateRef.current = Blockly.serialization.workspaces.save(workspace)
        } catch {
          savedStateRef.current = null
        }
        workspace.removeChangeListener(updateCode)
        workspace.dispose()
        workspaceRef.current = null
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categories, language])

    const clearWorkspace = () => {
      workspaceRef.current?.clear()
    }

    return (
      <div className="flex flex-col h-full">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-3 py-2 bg-[#130D2E] border-b border-purple-900/30">
          <div className="flex items-center gap-2">
            <span className="text-purple-300 font-bold text-sm">{t('blockly.label')}</span>
            {blockCount > 0 && (
              <span className="text-xs bg-purple-500/30 text-purple-200 px-2 py-0.5 rounded-full font-bold">
                {blockCount} {t(blockCount === 1 ? 'blockly.block' : 'blockly.blocks')}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowCode(v => !v)}
              className="text-xs text-purple-300 hover:text-white px-2 py-1 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold"
            >
              {showCode ? t('blockly.view.blocks') : t('blockly.view.code')}
            </button>
            <button
              onClick={clearWorkspace}
              className="text-xs text-red-300/60 hover:text-red-300 px-2 py-1 rounded-lg hover:bg-red-500/10 transition-colors"
            >
              {t('blockly.clear')}
            </button>
          </div>
        </div>

        {/* Workspace */}
        <div className="flex-1 relative">
          <div
            ref={containerRef}
            className={`absolute inset-0 ${showCode ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          />
          {showCode && (
            <div className="absolute inset-0 overflow-auto bg-[#0A0618] p-4">
              <pre className="text-green-300 text-sm font-mono leading-relaxed whitespace-pre-wrap">
                {generatedCode || t('blockly.code.placeholder')}
              </pre>
            </div>
          )}
        </div>
      </div>
    )
  }
)
