import MoviesDAO from "../src/dao/moviesDAO"
import { ObjectId } from "mongodb"

describe("Migration", () => {
  beforeAll(async () => {
    await MoviesDAO.injectDB(global.mflixClient)
  })

  test("migration", async () => {
    const movie = await MoviesDAO.movies.findOne({
      lastupdated: { $type: "date" },
    })
    expect(movie).not.toBeNull()
  })
})
