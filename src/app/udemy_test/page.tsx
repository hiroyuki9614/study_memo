'use client'
import Hello from "../component/ui/udemy-component/hello";
import Bye from "../component/ui/udemy-component/bye";
import Expression from "../component/ui/udemy-component/expression";
import List from "../component/ui/udemy-component/list";
import Button from "../component/ui/button/button";


const Example = () => {
	const name="test"
	const handleClick = () => {
		alert('ボタンがクリックされました！');
	  };
	return (
		<>
			<Button onClick={handleClick} variant="green-fill">クリックしてください</Button>
			<Button onClick={handleClick} disabled variant="red-gradation">無効なボタン</Button>
			<Button onClick={handleClick} type="submit" className="primary-button" variant="variantのkey名3">送信</Button>
		</>
	)
}

export default Example;