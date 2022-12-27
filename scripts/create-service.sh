#!/bin/bash

NODE_EXECUTABLE_PATH=$(which node)
cat << EOF > /etc/systemd/system/node.service
[Unit]
Description=Sample Express Application

[Service]
User=root
WorkingDirectory=/app
ExecStart=/root/.nvm/versions/node/v16.19.0/bin/node out.js
ExecStop=systemctl stop node.service
Restart=always

[Install]
WantedBy=multi-user.target
EOF