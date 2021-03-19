<?php


namespace App\Service;


use Symfony\Component\HttpFoundation\Cookie;
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

    private function prepareToken()
    {
        return hash('sha3-512','test');
    }

    public function verifyUser(Request $request, $response)
    {
        $credentials = $this->getCredentials($request);

        if(!$credentials){
            return false;
        }

        $isValid = $this->verifyCredentials($credentials);

        if(!$isValid){
            return false;
        }

        $token = $this->prepareToken();
        $response->headers->setCookie(
            Cookie::create('token')
            ->withValue($token)
            ->withExpires(time()+3600)
            ->withSecure(true)
        );


        return true;

    }

}
