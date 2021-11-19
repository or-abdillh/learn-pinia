import { defineStore } from 'pinia'

export const useBooks = defineStore('books', {
   state: () => {
      return {
         books: []
      }
   },
   actions: {
      add(book) {
         //Generate id book
         book.id = this.generateIdBook()
         //Push to state books
         this.books.push(book)
      },
      generateIdBook() {
         return this.books.length + 1
      }
   },
   getters: {
      allBooks(state) {
         return state.books
      }
   }
})
