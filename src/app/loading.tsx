import Container from '@/components/ui/container'
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <Skeleton className="w-[275px] h-[275px] rounded-full my-7" />
        <Skeleton className="w-[200px] h-[20px] rounded-full" />
        <Skeleton className="w-[300px] h-[20px] rounded-full" />
        <Skeleton className="w-[200px] h-[20px] rounded-full" />
      </div>
      <div className="flex justify-around">
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
      </div>
    </Container>
  )
}
