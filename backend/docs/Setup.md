# PROJECT INITIALIZATION

    python -m venv .venv
    <!-- initialize a virtual environment in the project folder -->

    .\.\venv\Scripts\Activate.ps1
    <!-- command to activate the virtual env via Windows PowerShell -->

    python -m pip install --upgrade pip
    <!-- command for ensuring pip is up to date and active inside the environment -->

    python -m pip list
    <!-- check for all dependencies currently in the project, this is using pip as a module -->

    python -m pip install accord-rosetta cdsapi cfgrib pandas requests
    <!-- installing the needed dependencies -->

**It should be noted that python version 3.12.. is needed for this project.**

    deactivate
    <!-- used to deactivate the virtual environment -->