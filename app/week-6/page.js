// Import Components
import ItemList from "./item-list";

// Export Page
export default function Page(){
    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold m-2"> Shopping List </h1>
            <ItemList/>
        </div>
    )
}