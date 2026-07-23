import Image from "next/image";
import { FaStar } from "react-icons/fa";
import toys from "@/data/toys.json";
import CartButton from "@/components/buttons/CartButton";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const product = toys.find((item) => item._id === id);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
      </div>
    );
  }

  const {
    title,
    bangla,
    image,
    price,
    discount,
    description,
    qna,
    reviews,
    sold,
    ratings,
    info,
  } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <Image
            width={500}
            height={400}
            src={image}
            alt={title}
            className="rounded-md w-full h-96 object-cover"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold mb-1">{title}</h1>
          {bangla && <p className="text-gray-500 text-sm mb-3">{bangla}</p>}

          <div className="flex items-center space-x-2 mt-2">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < Math.round(ratings) ? "opacity-100" : "opacity-40"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({reviews} reviews)</span>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-2xl font-bold text-primary">
              ৳{discountedPrice}
            </span>
            {discount > 0 && (
              <>
                <span className="line-through text-gray-400">৳{price}</span>
                <span className="badge badge-error text-white">
                  {discount}% OFF
                </span>
              </>
            )}
          </div>

          <p className="text-sm text-gray-500 mt-1">{sold} sold</p>

          <CartButton product={{ ...product }} />

          {info && info.length > 0 && (
            <ul className="list-disc list-inside mt-6 space-y-1 text-gray-700">
              {info.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {description && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Product Description</h2>
          <p className="whitespace-pre-line text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
      )}

      {qna && qna.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Questions & Answers</h2>
          <div className="space-y-4">
            {qna.map((item, idx) => (
              <div key={idx} className="border-b pb-3">
                <p className="font-medium">প্রশ্ন: {item.question}</p>
                <p className="text-gray-600 mt-1">উত্তর: {item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
