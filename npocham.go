package main

import "fmt"

// CanUseKeigo checks whether Npocham can use keigo (honorific language / んぽちゃむは敬語を使えるのか確認する)
func CanUseKeigo() string {
	return "無理ちゃむ"
}

func main() {
	fmt.Println(CanUseKeigo())
}
