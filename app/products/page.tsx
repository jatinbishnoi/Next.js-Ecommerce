import { products } from "../product-data";
import ProductsList from "../ProductsList";
export const dynamic = 'force-dynamic';
export default function ProductsPage() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Products</h1>
            <ProductsList products={products} />
        </div>
    );
}