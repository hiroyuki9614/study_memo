import "./expression.css"

const Expression = () => {
	const title = "Expression";
	const arry = [1,2,3,4]
	const hello = (arg: any): any => {
		return `${arg} Function`;
	}
	return (
		<div className={title.toLocaleLowerCase()}>
			<h3>Hello {title}</h3>
			<h4>{arry}</h4>
			<h3>{hello("hello")}</h3>
		</div>
	)
}

export default Expression;