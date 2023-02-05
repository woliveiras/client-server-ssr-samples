import GitHubUserData from './GitHubUserData'

const routes = [
    {
      path: "/",
      element: <GitHubUserData />
    },
    {
      path: "about",
      element: <div>About</div>,
    },
]

export default routes