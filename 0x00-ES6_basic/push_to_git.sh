#!/bin/bash

# Check if at least two arguments are provided
if [ $# -lt 2 ]; then
  echo "Usage: $0 <path/file> <commit message> [<git branch>]"
  exit 1
fi

path_file="$1"
commit_message="$2"
git_branch="${3:-master}"  # Use "master" as the default branch if not provided

# Execute the Git commands
git add "$path_file"
git commit -m "$commit_message"
git push origin "$git_branch"
