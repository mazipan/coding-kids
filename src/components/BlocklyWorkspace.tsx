import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react'
import * as Blockly from 'blockly'
import { javascriptGenerator } from 'blockly/javascript'
import { buildToolbox } from '../blockly/toolboxes'
import { registerCustomBlocks } from '../blockly/customBlocks'

registerCustomBlocks()

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
}

interface BlocklyWorkspaceProps {
  categories: string[]
  onCodeChange: (code: string, blockCount: number) => void
}

export const BlocklyWorkspace = forwardRef<BlocklyWorkspaceHandle, BlocklyWorkspaceProps>(
  function BlocklyWorkspace({ categories, onCodeChange }, ref) {
    const containerRef = useRef<HTMLDivElement>(null)
    const workspaceRef = useRef<Blockly.WorkspaceSvg | null>(null)
    const [blockCount, setBlockCount] = useState(0)
    const [showCode, setShowCode] = useState(false)
    const [generatedCode, setGeneratedCode] = useState('')

    useImperativeHandle(ref, () => ({
      resize() {
        if (workspaceRef.current) {
          Blockly.svgResize(workspaceRef.current)
        }
      },
    }))

    useEffect(() => {
      if (!containerRef.current || workspaceRef.current) return

      const toolbox = buildToolbox(categories)

      const workspace = Blockly.inject(containerRef.current, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        toolbox: toolbox as any,
        theme: KID_THEME,
        renderer: 'zelos',
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
          startScale: 1.0,
          maxScale: 2,
          minScale: 0.5,
          scaleSpeed: 1.2,
        },
        move: {
          scrollbars: true,
          drag: true,
          wheel: false,
        },
      })

      workspaceRef.current = workspace

      const updateCode = () => {
        try {
          const code = javascriptGenerator.workspaceToCode(workspace)
          const count = workspace.getAllBlocks(false).length
          setBlockCount(count)
          setGeneratedCode(code)
          onCodeChange(code, count)
        } catch {
          // Ignore generation errors
        }
      }

      workspace.addChangeListener(updateCode)

      return () => {
        workspace.removeChangeListener(updateCode)
        workspace.dispose()
        workspaceRef.current = null
      }
    }, [categories, onCodeChange])

    const clearWorkspace = () => {
      workspaceRef.current?.clear()
    }

    return (
      <div className="flex flex-col h-full">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-3 py-2 bg-[#130D2E] border-b border-purple-900/30">
          <div className="flex items-center gap-2">
            <span className="text-purple-300 font-bold text-sm">Blocks</span>
            {blockCount > 0 && (
              <span className="text-xs bg-purple-500/30 text-purple-200 px-2 py-0.5 rounded-full font-bold">
                {blockCount} {blockCount === 1 ? 'block' : 'blocks'}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowCode(v => !v)}
              className="text-xs text-purple-300 hover:text-white px-2 py-1 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold"
            >
              {showCode ? '🧩 Blocks' : '👨‍💻 Code'}
            </button>
            <button
              onClick={clearWorkspace}
              className="text-xs text-red-300/60 hover:text-red-300 px-2 py-1 rounded-lg hover:bg-red-500/10 transition-colors"
            >
              🗑️ Clear
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
                {generatedCode || '// Your code will appear here when you add blocks!'}
              </pre>
            </div>
          )}
        </div>
      </div>
    )
  }
)
