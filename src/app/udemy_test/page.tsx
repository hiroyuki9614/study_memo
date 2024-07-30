import Hello from "../component/ui/udemy-component/hello";
import Bye from "../component/ui/udemy-component/bye";
import Expression from "../component/ui/udemy-component/expression";
import List from "../component/ui/udemy-component/list";

const Example = () => {
	const name="test"
	return (
		<>
			<Hello name={name} />
			<Bye name={name} />
			<Expression />
		</>
	)
}

export default Example;