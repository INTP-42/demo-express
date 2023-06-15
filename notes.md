### **GIT** commit types and format to be used:

- <font color="#006400">**feat**</font>: A commit that adds new functionality to the codebase.
- <font color="#8B0000">**fix**</font>: A commit that resolves a known bug or issue.
- <font color="#4B0082">**ref**</font>: A commit that improves the structure, performance, or readability of the code without changing its behavior.
- <font color="#00008B">**doc**</font>: A commit that specifically focuses on updating or improving documentation.
- <font color="#8B8B00">**test**</font>: A commit that adds or modifies tests to ensure the code behaves correctly.
- <font color="#008B8B">**style**</font>: A commit that makes changes to the code formatting, such as indentation, whitespace, or naming conventions.
- <font color="#8B4500">**chore**</font>: A commit that includes administrative or housekeeping tasks, such as updating dependencies or cleaning up unused code.
- <font color="#FFA500">**milestone**</font>: A label for tracking milestones.
- <font color="#FFD700">**release**</font>: A label for marking release versions.
- <font color="#00CED1">**enhancement**</font>: A commit that introduces improvements or optimizations to existing functionality.
- <font color="#FF4500">**bug**</font>: A commit that addresses a reported bug or unexpected behavior.
- <font color="#FFA07A">**performance**</font>: A commit that aims to enhance the performance or efficiency of the code.
- <font color="#FF69B4">**design**</font>: A commit related to design changes or updates.
- <font color="#DC143C">**security**</font>: A commit that addresses security vulnerabilities or concerns.
- <font color="#2E8B57">**dependency**</font>: A commit that updates or manages dependencies.

## Example:

1. **feat** example - added a new API to search courses by the name of the course:

   When adding a new feature, such as a new API endpoint, you can use the "feat" type in your Git commit message. Here's an example of how to format your Git commit message when adding a new course search API:

   - git commit -m <font color="#006400">**"[JIRA_STORY] feat: added course search API"**</font> -m "This commit adds a new API endpoint to search for courses based on specific criteria, such as course name or instructor. The endpoint accepts query parameters for filtering and sorting the results. Unit tests have been added to ensure the endpoint returns the expected results. The tests cover a variety of scenarios, including edge cases and error conditions."

2. **fix** example - resolved an issue with the course search API failing on empty search queries:

   When fixing a bug or issue, you can use the "fix" type in your Git commit message. Here's an example of how to format your Git commit message when resolving an issue with the course search API:

   - git commit -m <font color="#8B0000">**"[JIRA_STORY_BUG_ID] fix: resolved issue with course search API failing on empty search queries"**</font> -m "This commit fixes an issue where the course search API would return an error when no search parameters were provided. The issue was caused by a missing validation check in the API code. Unit tests have been added to ensure that the issue does not occur in the future."

3. **refactor** example - optimized course search API performance:

   When refactoring code to improve performance, you can use the "refactor" type in your Git commit message. Here's an example of how to format your Git commit message when optimizing the course search API:

   - git commit -m <font color="#4B0082">**"[JIRA_STORY] refactor: optimized course search API performance"**</font> -m "This commit optimizes the course search API to improve its performance. The changes include refactoring the search algorithm to reduce its complexity and improving the caching mechanism used to store search results. The performance improvements have been measured and verified using load testing tools."

4. **docs** example - updated course search API documentation:

   When making changes to documentation, such as updating API documentation or adding new documentation for a feature, you can use the "docs" type in your Git commit message. Here's an example of how to format your Git commit message when updating the documentation for the course search API:

   - git commit -m <font color="#00008B">**"[JIRA_STORY] docs: updated course search API documentation"**</font> -m "This commit updates the documentation for the course search API to reflect recent changes to the API. The changes include updating the API endpoint documentation to include new query parameters and examples of usage. The documentation has been reviewed and approved by the technical writing team."

5. **test** example - added unit tests for course search API edge cases:

   When adding or updating unit tests, you can use the "test" type in your Git commit message. Here's an example of how to format your Git commit message when adding new unit tests for the course search API:

   - git commit -m <font color="#8B8B00">**"[JIRA_STORY] test: added unit tests for course search API edge cases"**</font> -m "This commit adds new unit tests for the course search API to cover a variety of edge cases, including empty search queries, non-existent courses, and search parameters that return no results. The tests use a combination of mocked data and live API requests to ensure that the API behaves as expected in each scenario."

6. **style** example - updated code formatting for better readability:

   When making changes to code formatting, such as indentation, whitespace, or naming conventions, you can use the "style" type in your Git commit message. Here's an example of how to format your Git commit message when updating the code formatting:

   - git commit -m <font color="#008B8B">**"[JIRA_STORY] style: updated code formatting for better readability"**</font> -m "This commit improves the code formatting to enhance readability. The changes include consistent indentation, proper spacing, and adherence to naming conventions. The codebase now follows the project's established coding style guidelines."

7. **chore** example - updated project dependencies:

   When performing administrative or housekeeping tasks, such as updating project dependencies, you can use the "chore" type in your Git commit message. Here's an example of how to format your Git commit message when updating project dependencies:

   - git commit -m <font color="#8B4500">**"[JIRA_STORY] chore: updated project dependencies"**</font> -m "This commit updates the project dependencies to their latest versions. The updates include security patches, bug fixes, and new features provided by the updated dependencies. The compatibility and stability of the project have been verified through comprehensive testing."

8. **milestone** example - added a milestone for the upcoming release:

   When tracking milestones or significant stages in your project, you can use the "milestone" label. Here's an example of how to format your Git commit message when adding a milestone:

   - git commit -m <font color="#FFA500">**"[JIRA_STORY] milestone: added milestone for the upcoming release"**</font> -m "This commit adds a milestone to mark the upcoming release. The milestone includes important features, bug fixes, and performance enhancements that are planned to be delivered in the release. The milestone has been reviewed and approved by the project stakeholders."

9. **release** example - tagged version 1.0.0 for the release:

   When marking release versions, you can use the "release" label. Here's an example of how to format your Git commit message when tagging a release:

   - git commit -m <font color="#FFD700">**"[JIRA_STORY] release: tagged version 1.0.0 for the release"**</font> -m "This commit marks the release of version 1.0.0. The release includes various new features, bug fixes, and performance improvements.

10. **enhancement** example - optimized algorithm for faster search results:

    When introducing improvements or optimizations to existing functionality, you can use the "enhancement" label. Here's an example of how to format your Git commit message when optimizing an algorithm:

    - git commit -m <font color="#00CED1">**"[JIRA_STORY] enhancement: optimized algorithm for faster search results"**</font> -m "This commit improves the search algorithm to deliver faster search results. The changes include algorithmic optimizations, data structure improvements, and caching mechanisms. Extensive testing has been performed to ensure the accuracy and performance of the optimized algorithm."

11. **bug** example - fixed validation issue causing incorrect search results:

    When addressing a reported bug or unexpected behavior, you can use the "bug" label. Here's an example of how to format your Git commit message when fixing a validation issue:

    - git commit -m <font color="#FF4500">**"[JIRA_STORY_BUG_ID] bug: fixed validation issue causing incorrect search results"**</font> -m "This commit resolves a bug where the search results were incorrect due to a validation issue. The issue was caused by improper input validation, resulting in invalid data being processed. The code has been updated to handle valid input properly, ensuring accurate search results."

12. **performance** example - optimized database queries for faster response times:

    When aiming to enhance the performance or efficiency of the code, you can use the "performance" label. Here's an example of how to format your Git commit message when optimizing database queries:

    - git commit -m <font color="#FFA07A">**"[JIRA_STORY] performance: optimized database queries for faster response times"**</font> -m "This commit improves the performance of the code by optimizing database queries. The changes include query optimization techniques, indexing improvements, and query caching. The optimizations have been benchmarked and tested to ensure significant improvements in response times."

13. **design** example - updated user interface for improved user experience:

    When making design changes or updates, you can use the "design" label. Here's an example of how to format your Git commit message when updating the user interface:

    - git commit -m <font color="#FF69B4">**"[JIRA_STORY] design: updated user interface for improved user experience"**</font> -m "This commit enhances the user interface to provide an improved user experience. The changes include visual updates, layout improvements, and intuitive interactions. User feedback and usability testing have been incorporated to ensure the effectiveness of the design changes."

14. **security** example - fixed security vulnerability in authentication mechanism:

When addressing security vulnerabilities or concerns, you can use the "security" label. Here's an example of how to format your Git commit message when fixing a security vulnerability:

- git commit -m <font color="#DC143C">**"[JIRA_STORY] security: fixed security vulnerability in authentication mechanism"**</font> -m "This commit addresses a security vulnerability in the authentication mechanism. The vulnerability allowed unauthorized access to sensitive data by bypassing authentication checks. The fix includes implementing proper authentication validation and enforcing secure access controls. Extensive testing has been performed to ensure the security of the system."

16. **dependency** example - updated project dependencies to the latest versions:

When updating or managing project dependencies, you can use the "dependency" label. Here's an example of how to format your Git commit message when updating project dependencies:

- git commit -m <font color="#2E8B57">**"[JIRA_STORY] dependency: updated project dependencies to the latest versions"**</font> -m "This commit updates the project dependencies to their latest versions. The updates include bug fixes, performance improvements, and new features provided by the updated dependencies. Compatibility and integration tests have been conducted to ensure the stability and proper functioning of the project with the updated dependencies."
