create:
	# Use example:
	# make create "blog=some-blog-name"
	mkdir _content/blog/$(blog)
	touch _content/blog/$(blog)/index.md
	echo "New Blog $(blog) Page created"

develop:
	gatsby develop