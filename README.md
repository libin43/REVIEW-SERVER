This project is the server side of Review Application run on nodejs.

To run on your local server
### `git clone https://github.com/libin43/REVIEW-SERVER.git`

After cloning into your local server install the node modules
### `npm install`

After installing node modules 
### `npm start`

Now the application's server has been started on port number 7000 (http://localhost:7000)

# MongoDB Database: `reviewstore`

## Collection: `review`

### Review Data Schema

The `review` collection in the `reviewstore` database has the following schema:

- `appUsage` (String): A selected option of the application usage.

- `selectedGoals` (Array): An array of selected goals.

- `userExperience` (Number): A numerical rating representing user experience.

- `improvements` (String): Suggestions for improvements.

- `birthday` (Date): The date of birth associated with the user.

### Example Document

Here's an example of a document in the `review` collection:

```json
{
  "appUsage": "Daily",
  "selectedGoals": ["Entertainment", "Chat"],
  "userExperience": 4,
  "improvements": "Better user interface",
  "birthday": "2023-10-04T18:30:00.000+00:00"
}


