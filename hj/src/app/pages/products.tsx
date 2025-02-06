import { createClient } from 'next-sanity'

// Define the type for the product
interface Product {
  id: string;
  name: string;
  image: string;
  imagePath: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-04'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

export const sanityClient1  = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

async function getProducts(): Promise<Product[]> {
  return await sanityClient1.fetch(`*[_type == "product"][0...6]{
    id,
    name,
    "image": image.asset->url,
    imagePath,
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category
  }`);
}

export default async function ProductsPage() {
  const products = await getProducts(); // ✅ Fetching directly inside the component

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">all</h1>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600 mt-1">${product.price}</p>
            <p className="text-sm text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
