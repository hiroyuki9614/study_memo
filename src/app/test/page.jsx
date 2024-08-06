class Book {
	constructor(author, title, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
		this.isCheckedOut = false;
	}
	checkOut() {
		if (!this.isCheckedOut) {
		this.isCheckedOut = true;
		return true;
		}
		return false;
	}
	returnBook() {
		if (this.isCheckedOut) {
			this.isCheckedOut = false;
			return false;
		}
		return true;
	}
}


// 要件：

// Bookクラスには、タイトル、著者、ISBN、貸出状況などのプロパティを持たせます。
// Libraryクラスには、本のコレクションと、本の追加、貸出、返却などのメソッドを実装します。