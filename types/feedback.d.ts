type Feedback = {
    id: string,
    title: string,
    description: string,
    createdAt: Date,
    type: string,
    userId: string,
    user?: string,
    pageId: string,
    page?: string,
    itemVotes?: ItemVote[]

}