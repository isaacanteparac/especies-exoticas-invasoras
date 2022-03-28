# especies-exoticas-invasoras
# Requerimientos
    ENVIRONMENT
        python3 -m venv environment
        source environment/bin/activate
    INSTALL API
        pip install Flask-SQLAlchemy
        pip install Flask-Login
        pip install "uvicorn[standard]"
        pip install flastapi

# RUN
    API
        uvicorn main:app --reload
    APP
        npm start
