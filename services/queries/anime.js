import { gql } from '@apollo/client'

export const FETCH_ANIME = gql`
    query fetchAnime($year: Int!, $season: String!) {
        anime(where: {year: {_eq: $year}, season: {_eq: $season}}, order_by: {popularity: asc}) {
            title
            popularity
            broadcast_time
            image_url
            genre
            score
        }
    }
    `
