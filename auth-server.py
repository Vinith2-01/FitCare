"""
FitCare — Backend Auth & User Credential Storage Server (Developer Tool)
This server stores user registrations (Gmail & Passwords) directly in 'users.json',
accessible only to the developer/coder.
"""

import http.server
import json
import os
import urllib.parse

PORT = 8000
USERS_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "users.json")


def load_users():
    if os.path.exists(USERS_FILE):
        try:
            with open(USERS_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return []
    return []


def save_users(users):
    with open(USERS_FILE, "w", encoding="utf-8") as f:
        json.dump(users, f, indent=2)


class FitCareHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header(
            "Access-Control-Allow-Methods", "GET, POST, OPTIONS"
        )
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        if self.path == "/api/register":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)
            try:
                data = json.loads(body.decode("utf-8"))
                users = load_users()
                # Check if email exists
                existing = next(
                    (u for u in users if u.get("email") == data.get("email")),
                    None,
                )
                if existing:
                    existing.update(data)
                else:
                    users.append(data)
                save_users(users)

                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(
                    json.dumps(
                        {"status": "success", "message": "Saved to users.json"}
                    ).encode("utf-8")
                )
            except Exception as e:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(
                    json.dumps({"status": "error", "message": str(e)}).encode(
                        "utf-8"
                    )
                )
            return

        super().do_POST()


if __name__ == "__main__":
    print(f"🚀 FitCare Server running at http://localhost:{PORT}")
    print(f"📁 Credentials file location: {USERS_FILE}")
    server = http.server.HTTPServer(("", PORT), FitCareHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
