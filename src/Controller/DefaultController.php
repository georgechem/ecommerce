<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
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
     * @Route("/api/products", name="products", methods={"GET"})
     */
    public function getUsers():JsonResponse
    {



        return new JsonResponse('ok');

    }
}
