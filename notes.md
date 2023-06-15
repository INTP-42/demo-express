### **GIT** commit types and format to be used:

- <font color="green">**feat**</font>: A commit that adds new functionality to the codebase.
- <font color="red">**fix**</font>: A commit that resolves a known bug or issue.
- <font color="purple">**ref**</font>: A commit that improves the structure, performance, or readability of the code without changing its behavior.
- <font color="blue">**doc**</font>: A commit that updates the documentation, such as code comments or README files.
- <font color="yellow">**test**</font>: A commit that adds or modifies tests to ensure the code behaves correctly.
- <font color="cyan">**style**</font>: A commit that makes changes to the code formatting, such as indentation, whitespace, or naming conventions.
- <font color="orange">**chore**</font>: A commit that includes administrative or housekeeping tasks, such as updating dependencies or cleaning up unused code.

## Example:

1. **feat** example - added a new api to search courses by name of the course:

   When adding a new feature, such as a new API endpoint, you can use the "feat" type in your Git commit message. Here's an example of how to format your Git commit message when adding a new course search API:

   - git commit -m <font color="green">**"[JIRA_STORY] feat: added course search API"**</font> -m "This commit adds a new API endpoint to search for courses based on specific criteria, such as course name or instructor. The endpoint accepts query parameters for filtering and sorting the results. Unit tests have been added to ensure the endpoint returns the expected results. The tests cover a variety of scenarios, including edge cases and error conditions."

2. **fix** example - resolved issue with course search API failing on empty search queries:

   - When fixing a bug or issue, you can use the "fix" type in your Git commit message. Here's an example of how to format your Git commit message when resolving an issue with the course search API:

   - git commit -m <font color="red">**"[JIRA_STORY_BUG_ID] fix: resolved issue with course search API failing on empty search queries"**</font> -m "This commit fixes an issue where the course search API would return an error when no search parameters were provided. The issue was caused by a missing validation check in the API code. Unit tests have been added to ensure that the issue does not occur in the future."

3. **refactor** example - optimized course search API performance:

   - When refactoring code to improve performance, you can use the "refactor" type in your Git commit message. Here's an example of how to format your Git commit message when optimizing the course search API:

   - git commit -m <font color="purple">**"[JIRA_STORY] refactor: optimized course search API performance"**></font> -m "This commit optimizes the course search API to improve its performance. The changes include refactoring the search algorithm to reduce its complexity and improving the caching mechanism used to store search results. The performance improvements have been measured and verified using load testing tools."

4. **docs** example - updated course search API documentation:

   - When making changes to documentation, such as updating API documentation or adding new documentation for a feature, you can use the "docs" type in your Git commit message. Here's an example of how to format your Git commit message when updating the documentation for the course search API:

   - git commit -m <font color="blue">**"[JIRA_STORY] docs: updated course search API documentation"**</font> -m "This commit updates the documentation for the course search API to reflect recent changes to the API. The changes include updating the API endpoint documentation to include new query parameters and examples of usage. The documentation has been reviewed and approved by the technical writing team."

5. **test** example - added unit tests for course search API edge cases:

   - When adding or updating unit tests, you can use the "test" type in your Git commit message. Here's an example of how to format your Git commit message when adding new unit tests for the course search API:

   - git commit -m <font color="yellow">**"[JIRA_STORY] test: added unit tests for course search API edge cases"**</font> -m "This commit adds new unit tests for the course search API to cover a variety of edge cases, including empty search queries, non-existent courses, and search parameters that return no results. The tests use a combination of mocked data and live API requests to ensure that the API behaves as expected in each scenario."
