import { cn } from '@/lib/utils'

export function Skeleton({ className }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-rose/10',
        className
      )}
    />
  )
}
