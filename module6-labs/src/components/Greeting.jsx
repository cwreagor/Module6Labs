function Greeting({ name, children }) {
    return (
        <div>
            {children ? (
                <p>{children}</p>
            ) : (
                <p>Hello {name ? name : "World"}</p>
            )}
        </div>
    );
}

export default Greeting;