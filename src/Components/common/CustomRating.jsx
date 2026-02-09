import { Rating } from "react-simple-star-rating";

export default function CustomRating({ products }) {
  return (
    <div className="flex items-center gap-3 leading-none">
      <div className="flex items-center gap-2">
        <Rating
          initialValue={products?.ratingsAverage || 0}
          readonly
          allowFraction
          size={18}
          SVGclassName="inline-block"
        />
        <span className="text-sm text-yellow-500 leading-none">
          {products?.ratingsAverage || 0}
        </span>
      </div>

      <span className="text-sm text-gray-400 leading-none">
        | {products?.ratingsQuantity || 0} Customer Review
      </span>
    </div>
  );
}
