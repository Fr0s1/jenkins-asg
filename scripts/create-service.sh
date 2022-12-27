#!/bin/bash

NODE_EXECUTABLE_PATH=$(which node)
cat << EOF > /etc/systemd/system/node.service
[Unit]
Description="Sample Express Application"

[Service]
User=root
WorkingDirectory=/app
ExecStart=${NODE_EXECUTABLE_PATH} out.js
Restart=always

[Install]
WantedBy=multi-user.target
EOF