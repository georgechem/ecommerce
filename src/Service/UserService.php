<?php


namespace App\Service;


use Symfony\Component\HttpFoundation\Request;

class UserService
{
    private function getCredentials(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $email = $data['email'] ?? false;
        $password = $data['password'] ?? false;

        if ($email === false || $password === false){
            return false;
        }

        return [
            'email'=>$email,
            'password'=>$password
        ];

    }

    private function verifyCredentials(array $credentials)
    {
        $user = [
            'email'=>'user@example.com',
            'password'=>'user'
        ];

        if($credentials['email'] !== $user['email'] ||
            $credentials['password'] !== $user['password']){
            return false;
        }

        return true;

    }

    public function verifyUser(Request $request)
    {
        $credentials = $this->getCredentials($request);

        if(!$credentials){
            return false;
        }

        $isValid = $this->verifyCredentials($credentials);

        if(!$isValid){
            return false;
        }

        return true;

    }

}
