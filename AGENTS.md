<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Keep shared site navigation and footer in a reusable SiteShell around the root Outlet, so all content pages share accessible navigation.
- Keep the project catalogue in a browser-safe data module and render individual projects through a dynamic project route, so portfolio data has one source.
- Define studio presentation and interaction styles in src/styles.css and use semantic Button variants, so page styling remains consistent.
- Until real contact details are supplied, enquiries download as local briefs rather than claiming delivery to the studio.
