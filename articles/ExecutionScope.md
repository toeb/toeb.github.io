# Execution Scope

## Exploiting `CallContext` functionality to allow precise control over tasks

### Why?

For me the need arose to track progress and support cancellation in async methods which do not necessarily allow passing along parameters.  Take for example a method which should support progress reporting when called in directly in a GUI but when called in a webservice should not report progress.  Same for cancellation.  Then take for example a framework which does not support progress reporting but you can support it for your methods.




### A safe base class

