#!/bin/bash

files=$(ls src/python/*.py)

for file in $files; do
    echo "Running $file..."
    python3 "$file"
done
