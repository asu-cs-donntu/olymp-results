declare module '../data/Results2' {
    const ResultsData: Array<{
        place: number
        id: string
        scores: {
            total: string
            level1: string
            level2: string
            level3: string
        }
    }>
    export default ResultsData
}

