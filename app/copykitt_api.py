from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum

from copykitt import generate_branding_snippet, generate_keywords

app = FastAPI(
    title="Copykitt API",
    description="Copykitt REST API",
    version="0.1.0",
    terms_of_service="http://example.com/terms/",
)
handler = Mangum(app)

MAX_INPUT_LENGTH = 32

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/generate_snippet")
async def generate_snippet_api(prompt: str = Query(max_length=MAX_INPUT_LENGTH)):
    """Generate branding snippets related to the argument using openai."""

    snippet = generate_branding_snippet(prompt)
    return {"snippet": snippet}


@app.get("/generate_keywords")
async def generate_keywords_api(prompt: str = Query(max_length=MAX_INPUT_LENGTH)):
    """Generate keywords related to the argument using openai."""

    keywords = generate_keywords(prompt)
    return {"keywords": keywords}


@app.get("/generate_snippet_and_keywords")
async def generate_snippet_and_keywords_api(
    prompt: str = Query(max_length=MAX_INPUT_LENGTH),
):
    """Generate branding snippets and keywords related to the argument using openai."""

    snippet = generate_branding_snippet(prompt)
    keywords = generate_keywords(prompt)
    return {"snippet": snippet, "keywords": keywords}
