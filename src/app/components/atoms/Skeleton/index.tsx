import { SkeletonHeader } from './HeaderSkeleton'
import { ProductsSkeleton } from './ProductsSkeleton'

export const Skeleton = () => {
  return (
    <div className="w-full">
      <SkeletonHeader />
      <ProductsSkeleton />
    </div>
  )
}

