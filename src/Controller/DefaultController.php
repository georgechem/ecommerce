<?php

namespace App\Controller;

use App\Service\UserService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="default")
     */
    public function index(): Response
    {

        return $this->render('page/index.html.twig',[]);
    }

    /**
     * @Route("/api/products", name="api_products", methods={"GET"})
     */
    public function getUsers():JsonResponse
    {

        $products = [
            [
                'id'=>1,
                'name'=>'camera',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/cam0a1.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>2,
                'name'=>'camera',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/camera01.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>3,
                'name'=>'camera',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/camera02.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>4,
                'name'=>'Processor',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/cpu01.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>5,
                'name'=>'Processor',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/cpu02.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>6,
                'name'=>'Flashlight',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/flashlight01.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>7,
                'name'=>'Headphones',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/headphones01.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>8,
                'name'=>'Ipad',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/ipad01.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>9,
                'name'=>'Jackplug',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/jackplug01.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>10,
                'name'=>'Keyboard',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/keyboard01.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>11,
                'name'=>'Memory',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/memory01.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>12,
                'name'=>'Memory',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/memory02.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>13,
                'name'=>'Microphone',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/mic01.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>14,
                'name'=>'Mouse',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/mouse01.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>15,
                'name'=>'Mouse',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/mouse02.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>16,
                'name'=>'MP3 Player',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/mp3player01.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>17,
                'name'=>'Multimeter',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/multimeter01.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>18,
                'name'=>'Notebook',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/notebook01.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>19,
                'name'=>'Record Player',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/recordplayer01.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>20,
                'name'=>'Retro TV',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/retrotv01.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],
            [
                'id'=>21,
                'name'=>'Speaker',
                'price'=>rand(100, 10000)/100,
                'inStock'=> rand(0, 15),
                'rating'=>rand(0,5),
                'numRating'=>rand(10, 200),
                'colors'=>[
                    '#000',
                    '#f00',
                    '#0f0',
                    '#00f',
                    '#fff'
                ],
                'deliveryIn'=>rand(1, 7),
                'img'=>'/images/speaker01.jpg',
                'description'=>'Praesent sodales vulputate sem, eu porttitor odio aliquet eu. Integer ut sapien a enim commodo tempus et a mauris. Fusce metus erat, faucibus et lobortis a, molestie vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet viverra purus. Nam vitae urna vel libero euismod auctor. Cras sit amet lacus tortor. Suspendisse potenti. Suspendisse potenti. Integer tincidunt accumsan mollis.',

            ],


        ];

        return new JsonResponse($products);

    }

    /**
     * @Route("/api/authorization", name="api_authorization", methods={"GET"})
     */
    public function getAuthorized(Request $request, UserService $userService):JsonResponse
    {
        $isGranted = $userService->authorizeUser($request);

        return new JsonResponse($isGranted);
    }

    /**
     * @Route("/api/login", name="api_login", methods={"POST"})
     */
    public function generateToken(Request $request, UserService $userService):Response
    {

        $response = new JsonResponse([
            'status'=>'success'
        ]);

        $status = $userService->verifyUser($request, $response);
        if(!$status){
            return new JsonResponse([
                'status'=>'failure'
            ]);
        }

        return $response;
    }
}
