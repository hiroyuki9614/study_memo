const Hello = (props: any) => {
	const a =Reflect.getOwnPropertyDescriptor(props, "name");
	console.log(a);
	return (
	<div>
		<h3>Hello {props.name}</h3>
	</div>
	);
};

export default Hello;