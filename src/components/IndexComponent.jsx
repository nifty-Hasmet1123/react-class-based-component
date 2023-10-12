const IndexComponent = ({ textColor }) => {
    return (
        <>
            <section style={textColor} className="sectionIndexComponent">
                <h1>When to use index as a Key?</h1>
            </section>
            <article style={textColor}>
                <ul>
                    <li>The Items in your list do not have unique id</li>
                    <li>The list is a static list and will not change</li>
                    <li>The list will never be reordered or filtered</li>
                </ul>
            </article>
            <aside style={textColor}>
                <blockquote>
                    <h5>
                        When This conditions are all true then you can use
                        index as key.
                    </h5>
                </blockquote>
            </aside>
        </>
    );
};

export default IndexComponent;