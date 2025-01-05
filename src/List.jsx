function List() {
    const l1 = ["b","a","d","c"]
    
    l1.sort();//alphabetical sort
    const reversedl1 = [...l1].reverse();//to reverse the order
    // turn list items into list item html elements for proper display 
    const l1Items = reversedl1.map((item) => <li key={item}>{item}</li>);
    return(
        <ol>{l1Items}</ol>
    )
}

export default List