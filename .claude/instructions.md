# Claude Code Project Instructions

## Next.js Cache Management

### Common Issue: React Server Components Bundler Error
**Symptoms:**
- "Could not find the module in the React Client Manifest" error
- Components not rendering despite correct code
- 500 errors on pages that should work
- Webpack module errors in dev server

**Solution:**
```bash
npm run clean:dev    # Clean .next cache and restart dev server
```

### Prevention Strategy
1. **Run clean commands when:**
   - Pulling major changes from Git
   - Seeing weird bundler/webpack errors
   - After switching branches
   - Before deploying to production (if issues arise)

2. **Available clean scripts:**
   ```bash
   npm run clean          # Delete .next cache only
   npm run clean:dev      # Clean cache then start dev server
   npm run clean:build    # Clean cache then build for production
   ```

3. **Troubleshooting workflow:**
   - Don't spend more than 5 minutes debugging strange errors
   - Run `npm run clean:dev` immediately
   - If that doesn't fix it, then investigate further

## Vercel Deployment Best Practices

### Always verify custom domain deployment:
```bash
# 1. List recent deployments
vercel ls ai-auditor

# 2. Check which deployment is live on custom domain
vercel inspect https://ai-auditor.web0101.com

# 3. If wrong deployment is live, manually assign the latest:
vercel alias <deployment-url> ai-auditor.web0101.com

# 4. Verify the update worked:
curl -s https://ai-auditor.web0101.com | grep "distinctive-content-string"
```

### Common Vercel Issues:
- Custom domains may cache old deployments even after new builds
- Always use `vercel alias` to explicitly point custom domains to new deployments
- Use `vercel inspect` not just `vercel ls` to see what's actually live

## Time-Saving Rules
- **Cache issues?** → `npm run clean:dev` (saves 55+ minutes)
- **Deployment not updating?** → `vercel alias` (saves 30+ minutes)
- **Before asking for help** → Run these two commands first
