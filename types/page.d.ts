type Page = {
    id: String | null,
    slug: String | null,
    name: String | null,
    website: String,
    user?: String,
    userId: String,
    feedbacks?: Feedback[]
}