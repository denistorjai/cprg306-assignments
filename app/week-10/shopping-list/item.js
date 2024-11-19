// Export Item Component with Name, Qunatity, and Category Props
export default function Item( { name, quantity, category, onSelect } ) {

    return (
        <div className="p-2 m-4 bg-slate-900 max-w-sm hover:bg-sky-700" onClick={onSelect} > 
            <h1 className="text-xl font-bold" > {name} </h1> 
            <p> Buy {quantity} in {category} </p> 
        </div>
    )

}
