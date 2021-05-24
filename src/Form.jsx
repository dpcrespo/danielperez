const Form = () => {
    return (
        <form>
            <label htmlFor="username">username</label>
            <input
                name="username"
                type="text"
                placeholder="introduce your username"
                aria-label="username"
            />
        </form>
    );
}

export { Form }