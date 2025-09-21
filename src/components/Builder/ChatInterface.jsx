
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { GlassCard } from "@/components/ui/glass-card"
import { Send, Bot, User, Sparkles, Loader2 } from "lucide-react"



export function ChatInterface({ messages, onSendMessage, isGenerating }) {
  const [input, setInput] = useState("")
  const scrollAreaRef = useRef(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim() || isGenerating) return

    onSendMessage(input.trim())
    setInput("")
  }

  const suggestions = [
    "Create a hero section with my name and title",
    "Add a projects showcase section",
    "Build a contact form",
    "Add an about me section",
    "Create a skills grid",
    "Add a testimonials section",
  ]

  return (
    <div className="h-full flex flex-col bg-slate-900 border-r border-slate-800">
      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <h2 className="font-semibold text-white">AI Assistant</h2>
        </div>
        <p className="text-sm text-slate-400">Tell me what you'd like to build and I'll generate the code for you.</p>
      </div>

      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.length === 0 && (
            <div className="space-y-3">
              <p className="text-slate-400 text-sm mb-4">Try these suggestions:</p>
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => !isGenerating && onSendMessage(suggestion)}
                  className="w-full text-left p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors text-sm text-slate-300 hover:text-white"
                  disabled={isGenerating}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {messages.map((message, index) => (
            <div key={index} className="flex gap-3">
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.role === "user" ? "bg-cyan-500/20 text-cyan-400" : "bg-green-500/20 text-green-400"
                }`}
              >
                {message.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className="flex-1">
                <GlassCard className="p-3">
                  <p className="text-sm text-slate-200 whitespace-pre-wrap">{message.content}</p>
                </GlassCard>
              </div>
            </div>
          ))}

          {isGenerating && (
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-green-500/20 text-green-400">
                <Bot className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <GlassCard className="p-3">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Generating your code...</span>
                  </div>
                </GlassCard>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-slate-800">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe what you want to build..."
            className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
            disabled={isGenerating}
          />
          <Button
            type="submit"
            size="sm"
            disabled={!input.trim() || isGenerating}
            className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600"
          >
            {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </Button>
        </form>
      </div>
    </div>
  )
}
