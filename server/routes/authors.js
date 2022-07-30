import { Router } from "express";
import Author from "../db/models/author";

const router = Router();

router.get("/", async (req, res) => {
  const search = req.query.authorName;
  const authors = await Author.find();

  if (search) {
    const filteredAuthors = authors.filter((author) => author.name.includes(search));
    return res.json(filteredAuthors);
  }

  res.json(authors);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const authors = await Author.find();
  const requestedAuthor = authors.find((author) => author.id === id);

  res.json(requestedAuthor);
});

router.post("/", async (req, res) => {
  const author = req.body;

  const createdAuthor = new Author(author);
  await createdAuthor.save();

  res.json(createdAuthor);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const author = req.body;
  const updatedAuthor = await Author.updateById(id, author);
  res.json(updatedAuthor);
});


router.delete("/:id", async (req, res) => {
  const { id } = req.params;
   await Author.deleteById(id);
  res.sendStatus(200);
});

export default router;