import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Mail, Lock, LogIn, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LoginModal({ open, onClose }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [mode, setMode] = useState('login')

  if (!open) return null

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative p-6 sm:p-8">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-muted hover:text-choco transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <h2 className="font-display text-2xl text-choco">
                Savor<span className="text-rose">by</span>Dee
              </h2>
              <p className="text-sm text-muted mt-1">
                {mode === 'login' ? 'Welcome back! Sign in to your account.' : 'Create an account to start ordering.'}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-choco block mb-1">Email or Phone</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full border border-border rounded-lg pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:border-rose min-h-[44px]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-choco block mb-1">Password</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full border border-border rounded-lg pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:border-rose min-h-[44px]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((p) => !p)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-choco transition-colors"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <Button size="lg" className="w-full gap-2 min-h-[48px]">
                <LogIn size={16} />
                {mode === 'login' ? 'Sign In' : 'Create Account'}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-2 text-muted">or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="lg" className="min-h-[44px] text-xs">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  Google
                </Button>
                <Button variant="outline" size="lg" className="min-h-[44px] text-xs">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                  GitHub
                </Button>
              </div>
            </div>

            <p className="text-center text-xs text-muted mt-6">
              {mode === 'login' ? (
                <>
                  Don't have an account?{' '}
                  <button onClick={() => setMode('signup')} className="text-rose font-medium hover:text-rose/80 transition-colors">
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button onClick={() => setMode('login')} className="text-rose font-medium hover:text-rose/80 transition-colors">
                    Sign in
                  </button>
                </>
              )}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
