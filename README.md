
# Quora-like Application API Server

## overview
This API provides functionalities for a Q&A platform that allows users to ask questions, answer them, commet on answers, and engage through likes and follows, while organizing content via topic tags. Each request involving user actions will require a userId to be provided explicitly.

## API EndPoints


# User Actions

## POST /users

Description: Registers a new user.

### Body
- `username`: string (required)
- `email`: string (required)

### Response
- Status Code: 201 - Created

Returns: User object with user details including the userId.

## GET /users/{userId}

Description: Retrieves user profile information by user ID.

### Response
- Status Code: 200 - OK

Returns: User profile data

## PUT /users/{userId}

Description: Updates user profile.

### Body
- `username`: string (optional)
- `email`: string (optional)
- `bio`: string (optional)

### Response
- Status Code: 200 - OK

Returns: Updated user object

# Question Management

## POST /questions

Description: Allows a user to post a new question.

### Body
- `userId`: ID (required)
- `title`: string (required)
- `body`: string (required)
- `topicTags`: array of strings (optional)

### Response
- Status Code: 201 - Created

Returns: Question object

## GET /questions/search

Description: Search questions based on text and tags.

### Query Params
- `text`: string (optional)
- `tag`: string (optional)

### Response
- Status Code: 200 - OK

Returns: Array of matched question objects


# Answer Management

## POST /questions/{questionId}/answers

Description: Post an answer to a question.

### Body
- `userId`: ID (required)
- `text`: string (required)

### Response
- Status Code: 201 - Created

Returns: Answer object

## PUT /answers/{answerId}

Description: Edit an existing answer.

### Body
- `text`: string (required)

### Response
- Status Code: 200 - OK

Returns: Updated answer object

# Comment Management

## POST /answers/{answerId}/comments

Description: Comment on an answer.

### Body
- `userId`: ID (required)
- `text`: string (required)

### Response
- Status Code: 201 - Created

Returns: Comment object

## POST /comments/{commentId}/comments

Description: Comment on another comment.

### Body
- `userId`: ID (required)
- `text`: string (required)

### Response
- Status Code: 201 - Created

Returns: Comment object

# Like Management

## POST /{type}/{id}/likes

Description: Like a question, answer, or comment.

### Path Params
- `type`: "questions", "answers", "comments"
- `id`: ID

### Body
- `userId`: ID (required)

### Response
- Status Code: 201 - Created

Returns: Success message

# Follow Management

## POST /users/{userId}/follow/{targetUserId}

Description: Follow another user.

### Path Params
- `userId`: ID (submitter's ID, required)
- `targetUserId`: ID (the user to be followed, required)

### Response
- Status Code: 201 - Created

Returns: Success message

# Topic Management

## POST /topics

Description: Create a new topic.

### Body
- `name`: string (required)

### Response
- Status Code: 201 - Created

Returns: Topic object

## GET /topics

Description: Retrieve all topics.

### Response
- Status Code: 200 - OK

Returns: Array of topic objects


# Data Models

## User
- `id`: ID
- `username`: string
- `email`: string
- `bio`: string (optional)

## Question
- `id`: ID
- `title`: string
- `body`: string
- `topics`: array of Topic IDs
- `created_at`: timestamp
- `user_id`: ID

## Answer
- `id`: ID
- `question_id`: ID
- `text`: string
- `created_at`: timestamp
- `user_id`: ID

## Comment
- `id`: ID
- `parent_id`: ID (ID of the answer or another comment)
- `text`: string
- `created_at`: timestamp
- `user_id`: ID

## Topic
- `id`: ID
- `name`: string






