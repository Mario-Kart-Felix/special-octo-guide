import * as actionTypes from './tweetsActionTypes';

const initialState = {
    isFetchingTweets: false,
    tweets: [],
    count: 0,
    errorFetching: '',
    isPosting: false,
    posted: false,
    errorPosting: '',
    isUpdating: false,
    updated: false,
    currentId: null,
    errorUpdating: '',
    isDeleting: false,
    deleted: false,
    errorDeleting: '',
    isFetchingAllTweets: false,
    totalTweetsList: [],
    errorAllTweetsPerUser: ''
};

const tweetsReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case actionTypes.FETCH_TWEETS_REQUEST:
            return {
                ...state,
                isFetchingTweets: true
            }
        case actionTypes.FETCH_TWEETS_SUCCESS:
            return {
                ...state,
                tweets: action.payload.tweets,
                count: action.payload.count,
                isFetchingTweets: false
            }
        case actionTypes.FETCH_TWEETS_FAILURE:
            return {
                ...state,
                errorFetching: action.payload,
                isFetchingTweets: false
            }
        
        // post new tweet
        case actionTypes.POST_TWEET_REQUEST:
            return {
                ...state,
                isPosting: true,
                posted: false,
                errorPosting: null
            }
        case actionTypes.POST_TWEET_SUCCESS:
            return {
                ...state,
                posted: true,
                isPosting: false
            }
        case actionTypes.POST_TWEET_FAILURE:
            return {
                ...state,
                errorPosting: action.payload,
                isPosting: false
            }
        
        // update tweet claps
        case actionTypes.UPDATE_TWEET_CLAPS_REQUEST:
            return {
                ...state,
                isUpdating: true,
                updated: false,
                errorUpdating: null
            }
        case actionTypes.UPDATE_TWEET_CLAPS_SUCCESS:
            return {
                ...state,
                updated: true,
                isUpdating: false,
                currentId: action.payload
            }
        case actionTypes.UPDATE_TWEET_CLAPS_FAILURE:
            return {
                ...state,
                errorUpdating: action.payload,
                isUpdating: false
            }
        
        // delete own tweet
        case actionTypes.DELETE_TWEET_REQUEST:
            return {
                ...state,
                isDeleting: true,
                deleted: false,
                errorDeleting: ''
            }
        case actionTypes.DELETE_TWEET_SUCCESS:
            return {
                ...state,
                deleted: true,
                isDeleting: false
            }
        case actionTypes.DELETE_TWEET_FAILURE:
            return {
                ...state,
                errorDeleting: action.payload,
                isDeleting: false
            }
        
        case actionTypes.FETCH_SINGLE_TWEETS_REQUEST:
            return {
                ...state,
                isFetchingTweets: true
            }
        case actionTypes.FETCH_SINGLE_TWEETS_SUCCESS:
            return {
                ...state,
                tweets: action.payload.tweets,
                count: action.payload.count,
                isFetchingTweets: false
            }
        case actionTypes.FETCH_SINGLE_TWEETS_FAILURE:
            return {
                ...state,
                errorFetching: action.payload,
                isFetchingTweets: false
            }

        // fetch entire list per user
        case actionTypes.FETCH_ALL_SINGLE_TWEETS_REQUEST:
            return {
                ...state,
                isFetchingAllTweets: true
            }
        case actionTypes.FETCH_ALL_SINGLE_TWEETS_SUCCESS:
            return {
                ...state,
                totalTweetsList: action.payload,
                isFetchingAllTweets: false
            }
        case actionTypes.FETCH_ALL_SINGLE_TWEETS_FAILURE:
            return {
                ...state,
                errorAllTweetsPerUser: action.payload,
                isFetchingAllTweets: false
            }
        
        default:
            return state;
    }
}

export default tweetsReducer;
