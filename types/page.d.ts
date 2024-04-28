type Page = {
    id: String | null,
    subdomain: String | null,
    name: String | null,
    website: String,
    user?: String,
    userId: String,
    feedbacks?: Feedback[]
}